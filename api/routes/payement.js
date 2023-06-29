
import { Router } from 'express';
const router = Router();
import { payements } from "../controllers/payemente.js";

router.post("/payement", payements);


export default router;

