import { Pipe, PipeTransform } from "@angular/core";
import { Validators } from "@angular/forms";
import { __importDefault } from "tslib";

@Pipe({
    name:'mayusculas'
})
export class MayusculasPipe implements PipeTransform{


    transform(value: string, enMayusculas:boolean): string{

        return ( enMayusculas ) ? value.toUpperCase() : value.toLowerCase()
    }

}