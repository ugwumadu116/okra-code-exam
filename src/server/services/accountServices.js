import accountsData from "../utils/accountDummyData";

class AccountService {
  /**
   * @method findAccount
   * @description Check if account exist
   * @param {object} name - bank name
   * @param {object} owner - account owner id
   * @returns {object} JSON API Response
   */
  static async findAccount(name, owner) {
    const accountInfo = await accountsData.Accounts.find(
      account => account.name === name && account.owner === owner
    );
    if (accountInfo) {
      return accountInfo;
    }
    return false;
  }
}
export default AccountService;
