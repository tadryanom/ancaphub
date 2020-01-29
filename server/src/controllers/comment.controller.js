const { commentService } = require('../services')
const { insertComment } = commentService

const insert = async (req, res, next) => {
  const { postId } = req.params
  const data = {
    user: req.user.id,
    content: req.body.content,
  }

  try {
    const result = await insertComment(postId, data)
    res.send({ 
      _id: result._id,
      comments: result.comments
    });
    next()
  } catch (e) {
    next(e)
  }
};

const remove = async (req, res, next) => {
  res.send(true)
};

const update = async (req, res, next) => {
  res.send(true)
};

module.exports = { insert, remove, update };