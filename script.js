window.onload=()=>{

    for (let i = 0; i < 120; i++) {
        var span = document.createElement('span');
        span.setAttribute('class','star'); 
        var top = Math.floor(Math.random()*100)+'vh';
        var left = Math.floor(Math.random()*100)+'vw';
        var types=['on','off'];
        if(types[Math.floor(Math.random()*2)]=='on'){
            span.style.opacity = '0.3'
            span.style.animation = 'star 2s linear infinite';
        }
        span.style.left = left;
        span.style.top = top;
        document.body.querySelector('main').append(span);
    }

    var img = document.createElement('img');
    img.src='./asset/meteor.png';
    img.style.position = 'absolute';
    img.style.transition = 'all 8s linear';
    img.style.width = '10vw';
    img.style.transform = 'translate(-60vw, 10vw)';
    document.body.querySelector('main').append(img);
    setTimeout(()=>{
        img.style.transform = 'translate(64vw, -25vw)';
    },800)

    var img1 = document.createElement('img');
    img1.src='./asset/meteor.png';
    img1.style.position = 'absolute';
    img1.style.transition = 'all 4s linear';
    img1.style.width = '10vw';
    img1.style.transform = 'translate(-60vw, 20vw)';
    document.body.querySelector('main').append(img1);
    setTimeout(()=>{
        img1.style.transform = 'translate(64vw, -20vw)';
    },1800)

    setTimeout(()=>{
        if(window.innerWidth < 600){
            document.getElementById('rocket1').style.transform = 'rotate(360deg) translate(40vw,6vw)';
            setTimeout(()=>{
                document.getElementById('rocket1').style.transition = 'unset';
                document.getElementById('rocket1').style.animation = 'rocket1m 20.4s linear infinite';
            },7495)
        }else{
            document.getElementById('rocket1').style.transform = 'rotate(360deg) translate(15vw,5vw)';
            setTimeout(()=>{
                document.getElementById('rocket1').style.transition = 'unset';
                document.getElementById('rocket1').style.animation = 'rocket1 20.4s linear infinite';
            },7495)
        }
    },800)

    setTimeout(()=>{
        if(window.innerWidth < 600){
            document.getElementById('rocket2').style.transform = 'rotate(0deg) translate(-50vw, 5vw)';
            setTimeout(()=>{
                document.getElementById('rocket2').style.transition = 'unset';
                document.getElementById('rocket2').style.animation = 'rocket2m 25.4s linear infinite';
            },7495)
        }else{
            document.getElementById('rocket2').style.transform = 'rotate(0deg) translate(-18vw, 2vw)';
            setTimeout(()=>{
                document.getElementById('rocket2').style.transition = 'unset';
                document.getElementById('rocket2').style.animation = 'rocket2 25.4s linear infinite';
            },7495)
        }
    },800)

}

const openForm = ()=>{

    document.body.innerHTML+=`
    <form action="">
    <span class="formSpan">
        <span class="formLogo">B</span>
        <span class="formHead">Enter Your Details</span>
    </span>
        <span class="formBody">
            <p>Name *</p>
            <input type="tel" name="name" required>
            <p>Phone *</p>
            <input type="mail" name="name" required>
            <p>Email *</p>
            <input type="text" name="name" required>
            <p>Organisation</p>
            <input type="text" name="name" required>
        </span>
        <button type="submit">Submit</button>
        <span class="formClose" onclick="formCloseFun()">x</span>
   </form>
    `;

    
    document.getElementById('typed').style.animation='fadeOut 2s linear';
    setTimeout(()=>{
        $('#typed').css({
            'animation':'unset',
            'opacity':'1',
            "visibility":'hidden'
        })
    },1500)

    setTimeout(()=>{
       
        $('form').animate({
            "height" : "51vh",
            "width": "18vw",
            "padding":"1vw"
        })
        setTimeout(()=>{
            var x=0;
            $('.formClose').fadeIn(1500);
            document.querySelector('form').querySelectorAll('span').forEach(e=>{
                setTimeout(()=>{
                    $(e).fadeIn(400);
                },x)
                x+=200;
            })
            document.querySelector('form').querySelectorAll('button').forEach(e=>{
                setTimeout(()=>{
                    $(e).fadeIn(400);
                },x)
            })
        },1700)
    },600)
    
    document.body.querySelector('.formClose').onclick=()=>{
        document.querySelector('form').querySelectorAll('input').forEach((e)=>{
           e.value="";
        });
        var x=0;
        document.querySelector('form').querySelectorAll('span').forEach(e=>{
            setTimeout(()=>{
                $(e).fadeOut(400);
            },x)
            x+=200;
        })
        document.querySelector('form').querySelectorAll('button').forEach(e=>{
            setTimeout(()=>{
                $(e).fadeOut(400);
            },x)
        })
        $(".formClose").animate({
            "visibility":"hidden"
        })
        $('form').animate({
            "height" : "0vh",
            "width": "0vw",
            "padding":"0vw"
        },100,"easeOutBounce");
    
    
    }
}

setTimeout(()=>{
    document.getElementById('typed').style.visibility = 'visible';
    var typed = new Typed(".text-slider", {
        strings: ["hi","Welcome to Bitblits Digital Workstation","Do you want to access the website ?",`<button onclick="openForm()" id="yes">Yes</button>&nbsp;&nbsp;&nbsp;&nbsp;<button id="later">Later</button>`],
        typeSpeed: 100,
        backSpeed: 50,
        loop: false,
        cursorChar: ''
    });
},6000)

