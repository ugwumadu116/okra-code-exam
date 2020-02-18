import AccountService from "../services/accountServices";

class AccountController {
  /**
   * @method getSingleBankAccount
   * @description reset user bank account details
   * @param {object} req - The Request Object
   * @param {object} res - The Response Object
   * @returns {object} JSON API Response
   */
  static async getSingleBankAccount(req, res) {
    try {
      const { bankName, owner } = req.query;
      const checkIfBankExist = await AccountService.findAccount(
        bankName,
        owner
      );
      if (!checkIfBankExist) {
        throw new Error("Bank account does not exist");
      }
      return res.status(200).json({
        status: 200,
        data: checkIfBankExist
      });
    } catch (error) {
      return res.status(404).json({
        status: 404,
        message: error.message
      });
    }
  }
}

export default AccountController;
