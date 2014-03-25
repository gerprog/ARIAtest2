function Animal() {}

Animal.prototype.numLegs = function () {
      if (this.kind == "insect"){
           return 6;
      } else {
         return 8;
      }
};