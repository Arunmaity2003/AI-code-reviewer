// const aiService = require("../services/ai.service.js")

// module.exports.getResponse = async (req,res) => {
//     const prompt = req.query.prompt

//     if(!prompt){
//         return res.status(400).send("Prompt is required.")
//     }

//     const response = await aiService(prompt)
//     res.send(response)
// }


const aiService = require("../services/ai.service.js");

module.exports.getReview = async (req, res) => {
    try {
        const code = req.body.code;

        if (!code) {
            return res.status(400).send("Prompt is required.");
        }

        const response = await aiService(code);

        res.send(response);
    } catch (err) {
        console.error(err);
        res.status(500).send("AI request failed.");
    }
};
