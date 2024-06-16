import constantMessages from "../../utils/messageConstants";
import dataSantizer from "../../utils/dataSanitizer";

const registerAdmin = async (body: Object) => {
  try {
    const response = dataSantizer.adminUser.parse(body);
    console.log(response);
    // throw new Error(`Invalidq`);

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
