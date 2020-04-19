function checkDivisibility(number) {
            var arrNew = [];

            for (let i = 1; i <= number; i++) {

                if (i % 2 !== 0 && i % 3 !== 0 && i % 5 !== 0) {
                    arrNew.push(i);
                }
                if (i % 2 === 0) {
                    if (i % 2 === 0 && i % 3 === 0 && i % 5 === 0) {
                        arrNew.push("yu-gi-oh");
                    } else if (i % 5 === 0) {
                        arrNew.push("yu-oh");
                    } else if (i % 3 === 0) {
                        arrNew.push("yu-gi");
                    } else {
                        arrNew.push("yu");
                    }
                } else if (i % 3 === 0) {
                    if (i % 5 === 0) {
                        arrNew.push("gi-oh");
                    } else {
                        arrNew.push("gi");
                    }
                } else if (i % 5 === 0) {
                    if (i % 2 === 0) {
                        arrNew.push("yu-oh");
                    } else {
                        arrNew.push("oh");
                    }
                }


            }

            return arrNew;
        }
        checkDivisibility(100)
        checkDivisibility(10)