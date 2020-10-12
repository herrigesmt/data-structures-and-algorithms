class Hashtable {
    constructor (size=1024) {
        this.buckets = new Array(size);
    }

    add(key, value){
        let index = this.hash(key);
        if(this.buckets[index].length){
            this.buckets[index].push({key : value});
        } else {
            this.buckets[index] = [{key : value}];
        }

    }

    get(key){
        let index = this.hash(key);
        let bucket = this.buckets[index];
        if(bucket.length){
            for(let index of bucket){
                if(index[key]){
                    return index[key];
                }
            }
        } else {
            return false;
        }
    }

    contains(key){
        let index = this.hash(key);
        let bucket = this.buckets[index];
        if(bucket.length){
            for(let index of bucket){
                if(index[key]){
                    return true;
                }
            }
        } else {
            return false;
        }
    }

    hash(key){
        let sum = 0;
        for(let char of key){
            sum += char.charCodeAt(0);
        }
        const primed = sum * 599;
        const index = primed % this.buckets.length;
        return index;
    }
}
