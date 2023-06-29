import { Router } from 'express';
import { connexion,inscription } from "../controllers/authInscription.js";
const router = Router();

router.post("/connexion", connexion);
router.post("/inscription", inscription);

export default router;