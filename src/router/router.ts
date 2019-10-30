import { Router, Request, Response } from 'express';
import MySql from '../mysql/mysql';

const router = Router();

router.get('/heroes', (req: Request, res: Response) => {
    const query = `SELECT * FROM heroes`;
    MySql.executeQuery(query, (err: any, heroes: Object[]) => {
        if (err) {
            return res.status(400).json({ ok: false, err });
        }

        res.json({ ok: true, heroes });
    });
});

router.get('/heroes/:id', (req: Request, res: Response) => {
    const id = req.params.id;
    const escapedId = MySql.instance.cnn.escape(id);
    const query = `SELECT * FROM heroes WHERE id = ${escapedId}`;

    MySql.executeQuery(query, (err: any, heroes: Object[]) => {
        if (err) {
            return res.status(400).json({ ok: false, err });
        }

        res.json({ ok: true, heroe: heroes[0] });
    });
});

export default router;