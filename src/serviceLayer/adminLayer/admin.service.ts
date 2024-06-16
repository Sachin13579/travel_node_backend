import constantMessages from "../../utils/messageConstants";
import dataSantizer from "../../utils/dataSanitizer";

const registerAdmin = async (body: Object) => {
  try {
    const response = dataSantizer.adminUser.safeParse(body);

    if (!response.success) {
      return {
        status: false,
        statusCode: 400,
        message: response.error.flatten().fieldErrors,
      };
    }

    console.log(body);
    return {
      status: true,
      statusCode: 200,
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
