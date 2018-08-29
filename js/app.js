

import "./style.scss";

import { DecCalculator } from "./DecCalculator";

$(document).ready(function() {

    const decCalc = new DecCalculator(".dec-calculator");
    decCalc.changeNumber()
    decCalc.add()

})
