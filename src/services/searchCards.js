import axios from 'axios';

const searchCards = (name) => {
    return new Promise((resolve, reject) => {
        axios
            .get(`https://api.scryfall.com/cards/named?fuzzy=${name.trim()}+com`)
            .then((res) => {
                res && resolve(res);
            })
            .catch((err) => reject(err));
    });
}

export default searchCards