const Hashmap = require("./hashtable");

module.exports = function leftjoin(hm1, hm2) {
  let result = new Hashmap(20);
  hm1.map.forEach((element) => {
    let hm1Currrent = element.head;
    while (hm1Currrent) {
      // console.log(hm1Currrent.value);
      // console.log( Object.keys(hm1Currrent.value))
      hm2.map.forEach((element) => {
        let hm2Currrent = element.head;
        while (hm2Currrent) {
          console.log( Object.keys(hm2Currrent.value))

          if (
            Object.keys(hm1Currrent.value) == Object.keys(hm2Currrent.value)
          ) {
            let one = hm1.get(Object.keys(hm1Currrent.value));
            console.log({ one });
            let two = hm2.get(Object.keys(hm2Currrent.value));
            let join = `${one}, ${two}`;
            result.set(Object.keys(hm1Currrent.value), join);
          }
          hm2Currrent = hm2Currrent.next;
        }
      });

      //   hm1.map.forEach((element) => {
      //     // let hm2Currrent = element.head;
      //     console.log({element});
      // while (hm2Currrent) {
      //   if (hm1Currrent.value == hm2Currrent.value) {
      //     let one=hm1.get(hm1Currrent.value)
      //     let two=hm2.get(hm2Currrent.value)
      //     let join=`${one}, ${two}`
      //     result.set(hm1Currrent.value,join);

      //   }
      //   else{
      //     let one=hm1.getKey(hm1Currrent.value)
      //     let join2=`${one}, Null`
      //     result.set(hm1Currrent.value,join2);
      //   }
      //   hm1Currrent = hm1Currrent.next;
      // }
      //   }
      //   );
      //   keys.push(Object.keys(currentNode.value))
      hm1Currrent = hm1Currrent.next;
    }
  });
};
