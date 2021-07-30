var slider1 = {
    imagesUrls: [],
    currentImegIndex: 0,
    showPrevBtn: document.querySelector('#show-prev'),
    showNextBtn: document.querySelector('#show-next'),
    slideImage: document.querySelector('#slide-img'),

    start: function () {
        var that = this

        this.showPrevBtn.addEventListener('click', function(e) {
            //this.onShowPrevBtnClick
            that.onShowPrevBtnClick(e)
            alert('hey')

        } )
        

        this.showNextBtn.addEventListener('click', function(e) {
            that.onShowNextBtnClick(e)
        } );
        this.imagesUrls.push('https://mytopgear.ru/wp-content/uploads/2017/01/kia-picanto-1024x678.jpg');
        this.imagesUrls.push('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuxDr4VUtvUzTHvBtRwPDU-qVHUzf5Fbuzmw&usqp=CAU');
        this.imagesUrls.push('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7El1rfN7R9jiLbyQ-3roLEO2N_k8qwT-OAg&usqp=CAU');
        this.imagesUrls.push('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSXp2RRw3MtS9agdijotMzjheYZebiYtL-3A&usqp=CAU');

        this.slideImage.src = this.imagesUrls[this.currentImegIndex]
        // this.showPrevBtn.disabled = true

    },



         onShowPrevBtnClick: function (e) {
        this.currentImegIndex--

        this.slideImage.src = this.imagesUrls[this.currentImegIndex]
        this.showNextBtn.disabled = false

        if (this.currentImegIndex === 0) {
            showPrevBtn.disabled = true
        }

        
    },

    onShowNextBtnClick: function (e) {
        this.currentImegIndex++

        
        this.slideImage.src = this.imagesUrls[this.currentImegIndex]
        this.showPrevBtn.disabled = false
        if (this.currentImegIndex === (this.imagesUrls.length - 1)) {
            this.showNextBtn.disabled = true
        }


    }



























}