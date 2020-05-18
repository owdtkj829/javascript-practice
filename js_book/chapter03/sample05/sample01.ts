class Item {
    constructor(price, tax=10) {
        this.tax = tax;
        if (isFinite(price)) {
            this.price = price;
        } else {
            this.price = 0;
        }
    }

    getTax() {
        return Math.round(this.price * (this.tax / 100));
    }
}
