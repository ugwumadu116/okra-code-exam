import express from 'express';
import AccountController from '../controllers/accountControllers';

const { getSingleBankAccount } = AccountController;

const bankRoutes = express.Router();

bankRoutes.get('/', getSingleBankAccount);

export default bankRoutes;
