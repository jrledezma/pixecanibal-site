import app from "./src/api/app";
import { CommonFunctions } from './src/api/common/commonFunctions';
import { PrintColorType } from "./src/api/enums/printColorType.enum";

const port = process.env.PORT || CommonFunctions.AppConfiguration.port;
let listenServer = app.listen(port, (): void => {
  CommonFunctions.PrintConsoleColor(CommonFunctions.AppConfiguration.appName
    .concat(' is listening on port ' + CommonFunctions.AppConfiguration.port.toString()),
    PrintColorType.info)
})

export { listenServer };