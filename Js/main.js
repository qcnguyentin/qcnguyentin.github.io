
$(document).ready(function() {
    $("div.contact").addClass(" wow animate__bounceInLeft")
    $("div.contact1").addClass(" wow animate__bounceInRight")
    $("div.info-product > div.product, div.feedback-content").addClass(" wow animate__backInUp")
    wow = new WOW({
        boxClass:     'wow',      // default
        animateClass: 'animate__animated', // default
        offset:       0,          // default
        mobile:       true,       // default
        live:         true        // default
    })
    wow.init();
    $(".chose").css({"color": "#2591d8"})
    $("#goToTop").hide()
    $(window).scroll(function() {
        
        if($(this).scrollTop() >= 90){
            $("#goToTop").show("slow");
        }
        else{
            $("#goToTop").hide("slow");
        }
    })
    $("#goToTop").click(function() {
        $("html, body").animate({
            scrollTop: 0
        }, 1000);
    })
    var name = $("#name")
    var phone = $("#phone")
    var mail = $("#mail")        
    var address = $("#address")
    $(".inform").hide()
    $("#submit").click(function(){
        
        if(!name.val()[0])
                name.css({"outline": "2px solid red"})
            else
                name.css({"outline": "none"})
            if(!phone.val()[0])
                phone.css({"outline": "2px solid red"})
            else
                phone.css({"outline": "none"})
            if(!mail.val()[0])
                mail.css({"outline": "2px solid red"})
            else
                mail.css({"outline": "none"})
            if(!address.val()[0])
                address.css({"outline": "2px solid red"})
            else
                address.css({"outline": "none"})
        if(!name.val()[0] || !phone.val()[0] || !mail.val()[0] || !address.val()[0])
        {
            
            $(".popup").prepend(`
                <div class="informa">
                    <a href="#" id="close">x</a>
                    <div class="notice">
                        <h5>Th??ng tin c?? d???u (*) l?? b???t bu???c. <br/>Vui l??ng nh???p ????? th??ng tin</h5>
                    </div>
                </div>
            `)
        }
        else{
            $(".popup").prepend(`
            <div class="inform">
                <a href="#" id="close">x</a>
                <input type="button" value="OK" id="ok"/>
                <input type="button" value="Ch???nh s???a" id="fix"/>
                <div class="notice">
                    <h5>Th??ng tin li??n h???</h5>
                    <h5>H??? v?? t??n: ${name.val()}</h5>
                    <h5>S??? ??i???n tho???i: ${phone.val()}</h5>
                    <h5>Email: ${mail.val()}</h5>
                    <h5>?????a ch???: ${address.val()}</h5>
                    <h5> Ch??ng t??i s??? li??n h??? v???i b???n th??ng qua s??? ??i???n tho???i: ${phone.val()}.</h5>
                </div>
            </div>   
            `)
        }
    })
    $(".popup").on("click", "#close, #fix", function(){
        event.preventDefault()
        $(this).parent().remove()
    })
    $(".popup").on("click", "#ok", function(){
        event.preventDefault()
        $(this).parent().remove()
        $(".popup").prepend(`
            <div class="informa">
                <a href="#" id="close">x</a>
                <div class="notice">
                    <h5>Ch??ng t??i s??? li??n h??? t???i b???n trong th???i gian s???m nh???t.</h5>
                </div>
            </div>
        `)
    })
    
    
})
function init(){
    var a = ["lily3.jpg", "Kimhien.jpg", "Vencen.jpg", "Tuart1.jpg"]
    var i = 0;
    var img = document.querySelector(".intro-content-img img")
    setInterval(function(){
            img.src =  "images/" + a[i]
            i++;
            if(i == 4)
                i = 0;
    }, 3000)
}