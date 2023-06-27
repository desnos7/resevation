import { Router } from 'express';
import { connexion,inscription } from "../Controllers/authInscription.js";
const router = Router();

router.post("/connexion", connexion);
router.post("/inscription", inscription);

export default router;