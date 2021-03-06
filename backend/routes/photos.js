const express = require('express');
const passport = require('passport');
const path = require('path');

const db = require('../db');
const upload = require('../config/multer.js');
const { authorize } = require('../config/middlewares');

const router = express.Router();

// passport.authenticate('jwt', { session: false })
router.patch(
  `/api/users/:id/photo`,
  passport.authenticate('jwt', { session: false }),
  authorize,
  upload.single('photo'),
  async (req, res) => {
    try {
      const { id } = req.params;
      // if (+req.user.id !== +id) {
      //   const error = new Error('Unauthorized. You are not the owner.');
      //   error.status = 401;
      //   throw error;
      // }
      const photo = `/api/photos/${req.file.filename}`;
      const { rows } = await db.query(
        `
        UPDATE users
        SET photo = $1
        WHERE id = $2
        RETURNING *
      `,
        [photo, id]
      );
      res.send(rows[0]);
    } catch (error) {
      res.status(error.status || 500).send({ error: error.message });
    }
  }
);

module.exports = router;
