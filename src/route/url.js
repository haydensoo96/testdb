import {getReceipt} from '../controller/Function'

export default [
    {
        method:'GET',
        url:'/sa/getReceipt',
        handler:getReceipt,
    }
]