import mixpanel from 'mixpanel-browser'
import * as event from './eventConstants'

class Mixpanel{

    constructor(){
        mixpanel.init('c22b75cf040bd82f1b1f6f5738d850e2', {debug: true, persistence: 'localStorage'});
        // Generat number from 1 to 100, assume these are real UserID
        let randomUserID = Math.ceil(Math.random() * 100);
        mixpanel.identify(randomUserID);
    }

    homePageViewed(){
        mixpanel.track(event.HOME_PAGE_VIEWED)
    }

    productPageViewed(productID){
        mixpanel.track(event.PRODUCT_PAGE_VIEWED, {'productID': productID} )
    }

    productPurchased(itemsPrice){
        mixpanel.track(event.PRODUCT_PURCHASED, {'items Price': itemsPrice })
    }

    productAddtoCart(){
        mixpanel.track(event.PRODUCT_ADD_TO_CART)
    }

    userRegister(){
        mixpanel.track(event.USER_REGISTERED)
    }


}

const mixpanelInstance = new Mixpanel();

export default mixpanelInstance;