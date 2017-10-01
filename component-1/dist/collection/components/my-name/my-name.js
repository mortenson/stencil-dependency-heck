var MyName = /** @class */ (function () {
    function MyName() {
    }
    MyName.prototype.render = function () {
        return (h("p", 0, t("Hello, my name is "),
            this.first, t(" "),
            this.last));
    };
    return MyName;
}());
export { MyName };
