import cap from '../img/stuff_icon/casquette.svg';
import tshirt from '../img/stuff_icon/tshirt.svg';
import short from '../img/stuff_icon/short.svg';
import tongs from '../img/stuff_icon/tongs.svg';
import cream from '../img/stuff_icon/cream.svg';
import fan from '../img/stuff_icon/fan.svg';
import sneakers from '../img/stuff_icon/sneakers.svg';
import bottle from '../img/stuff_icon/bottle.svg';
import sweat from '../img/stuff_icon/sweat.svg';
import cargo from '../img/stuff_icon/cargo.svg';
import coat from '../img/stuff_icon/coat.svg';
import hood from '../img/stuff_icon/hood.svg';
import imper from '../img/stuff_icon/imper.svg';
import boots from '../img/stuff_icon/boots.svg';
import umbrella from '../img/stuff_icon/umbrella.svg';
import bigSocks from '../img/stuff_icon/bigSocks.svg';
import bonnet from '../img/stuff_icon/bonnet.svg';
import gloves from '../img/stuff_icon/gloves.svg';
import bouillote from '../img/stuff_icon/bouillote.svg';
import pants from '../img/stuff_icon/pants.svg';
import coffe from '../img/stuff_icon/coffe.svg';
import bob from '../img/stuff_icon/bob.svg';
import sunglasses from '../img/stuff_icon/sunglasses.svg';

const metricsAlgo = (temp, wind, humidity) => {
    console.log('\nmetrics :' + temp, wind, humidity);
    let resultStuff = {};
    //positive temperature
    if (temp < 30 && temp >= 25 && wind < 5 && humidity < 60) {
        resultStuff = {
            head: bob,
            topBody: tshirt,
            lowerBody: short,
            feet: tongs,
            bonus1: cream,
            bonus2: fan,
            bonus3: bottle
        };
        return resultStuff;
    } else if (temp < 25 && temp >= 18 && humidity < 50) {
        resultStuff = {
            topBody: tshirt,
            lowerBody: pants,
            feet: sneakers,
            bonus1: sunglasses
        };
        return resultStuff;
    } else if (temp < 18 && temp >= 10 && humidity < 50) {
        resultStuff = {
            topBody: sweat,
            lowerBody: pants,
            feet: sneakers
        };
        return resultStuff;
    } else if (temp < 10 && temp >= 0 && wind < 5) {
        resultStuff = {
            topBody: coat,
            lowerBody: cargo,
            feet: sneakers
        };
        return resultStuff;
    }
    //negative temperature
    else if (temp > -5 && temp < 0 && temp < 0 && wind < 5 && humidity < 75 && humidity > 65) {
        resultStuff = {
            head: bonnet,
            topBody: coat,
            lowerBody: cargo,
            feet: sneakers,
            bonus1: gloves
        };
        return resultStuff;
    } else if (temp > -10 && temp < 0 && wind < 5 && wind > 0 && humidity >= 75) {
        resultStuff = {
            head: bonnet,
            topBody: coat,
            lowerBody: cargo,
            feet: sneakers,
            bonus1: gloves,
            bonus2: coffe,
            bonus3: bouillote,
            bonus4: bigSocks
        };
        return resultStuff;
    }
    //high wind with negative temperature
    else if (temp > 0 && temp < 5 && wind > 10) {
        resultStuff = {
            head: bonnet,
            topBody: coat,
            lowerBody: cargo,
            feet: sneakers,
            bonus1: gloves,
            bonus2: imper
        };
        return resultStuff;
    }
    //High humidity and positive temperature
    else if (temp > 5 && wind > 0 && humidity >= 60 && humidity < 80) {
        resultStuff = {
            topBody: sweat,
            lowerBody: cargo,
            feet: sneakers,
            bonus1: umbrella
        };
        return resultStuff;
    } else if (temp > 5 && wind > 0 && humidity >= 80) {
        resultStuff = {
            topBody: imper,
            lowerBody: cargo,
            feet: sneakers,
            bonus1: umbrella
        };
        return resultStuff;
    } else {
        console.log('marche pas pour les valeurs ' + temp, wind, humidity);
    }
};

export { metricsAlgo };
