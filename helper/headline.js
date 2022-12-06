const headLine = require("../Schemas/home/headLine");
const moongose = require("mongoose");
const Headline = new moongose.model("headLine", headLine);

const get_headline = (req, res) => {
  Headline.find((err, data) => {
    if (err) {
      res.status(500).json({ err: "there was a server site error1" });
    } else {
      res.status(200).json(data);
    }
  });
}

const post_headline = async (req, res) => {
  const schema = {
    sub_title: req.body.sub_title,
    title: req.body.title,
    description: req.body.discription,
    link: req.body.link,
    vide_url: req.body.video_url,
  };
  const newHeadline = new Headline({ ...schema });
  newHeadline.save((err) => {
    if (err) {
      res.status(500).json({ err: "there was a server site error" });
    } else {
      res.status(200).json({ message: "Post successfully" });
    }
  });
}

module.exports = {get_headline, post_headline}