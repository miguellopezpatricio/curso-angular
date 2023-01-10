import { Pipe, PipeTransform } from "@angular/core";
import { __importDefault } from "tslib";

@Pipe({
    name: 'vuela'
})
export class VuelaPipe implements PipeTransform {

    transform(vuela: boolean): string {

        if (vuela == true) {
            return 'vuela'

        } else {
            return 'no vuela'
        }
    }


}