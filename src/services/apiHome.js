import axios from 'axios';

const getSlip = (name) => {
    
    return new Promise((resolve, reject) => {
        axios
            .get(`https://api.scryfall.com/catalog/land-types`)
            .then((res) => {
                res && resolve(res.data.data);
            })
            .catch((err) => reject(err));
    });
}

export default getSlip