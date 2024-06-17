import constantMessages from "../../utils/messageConstants";
import dataSantizer from "../../utils/dataSanitizer";
import adminUser from "../../models/admin.model";

const registerAdmin = async (body: Object) => {
  /**
   * APPROCH OF FUNCTION
   * STEP 1- Validate the req from client.
   * STEP 2 - save the  requested data to the database.
   */
  try {
    const response = dataSantizer.adminUser.safeParse(body);
    console.log(response.error);
    if (!response.success) {
      return {
        status: false,
        statusCode: 400,
        message: response.error.flatten(),
      };
    }
    const registerAdmin = await adminUser.create(body);

    return {
      status: true,
      statusCode: 200,
      data: registerAdmin,
      message: constantMessages.ADMIN_REGISTERED,
    };
  } catch (error: any) {
    return { status: false, statusCode: 400, message: error.message };
  }
};

const adminServiceFuncs = {
  registerAdmin,
};
export default adminServiceFuncs;
