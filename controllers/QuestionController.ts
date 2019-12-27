import {Request, Response} from "express";

import {DbHelpers} from "../lib/db/mongoDb/DbHelpers";
import {Skill} from "../lib/db/postgresSQL/models/Skill";


const dbHelpers = new DbHelpers();

class QuestionController {

    public static getQuestion = async (req: Request, res: Response) => {
        try {
            const record = await dbHelpers.getQuestion(req.query.id);
            res.status(200).send(record);
        } catch (e) {
            console.log(e.message);
            res.status(500).send( {body: e.message});
        }
    }

    public static addQuestion = async (req: Request, res: Response) => {
        const {skillsCovered, difficulty, score} = req.body;

        try {
            const skillRecords = Skill.findAll({where: {id: skillsCovered}});
            const covered = skillRecords.map((record) => {
                return {
                    difficulty: record.difficulty,
                    skillId: record.id,
                };
            });
            if (skillRecord) {
                const record = await dbHelpers.createQuestion(covered, difficulty, score);
                res.status(200, record);

            } else {
                res.status(400, {body: "Invalid skill reference"});
            }
        } catch (e) {
            console.log(e.message);
            res.status(500).send( {body: e.message});
        }
    }

    // no need to implement yet
    public static editQuestion = async (req: Request, res: Response) => {
        // todo
    }

    public static deleteQuestion = async (req: Request, res: Response) => {
        try {
            const record = await dbHelpers.getQuestion(req.query.id);
            if (record) {
                await dbHelpers.deleteQuestion(req.query.id);
                res.status(200).send({message: "Successfully deleted"});
            } else {
                res.status(400).send({message: "Missing record!"});
            }

        } catch (e) {
            console.log(e.message);
            res.status(500).send({body: e.message});
        }
    }
}

export default QuestionController;