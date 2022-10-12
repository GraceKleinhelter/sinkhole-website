let hills = document.getElementById('hills');
        let salamander = document.getElementById('salamander');
        let text = document.getElementById('text');
        let btn = document.getElementById('btn');
        let tree = document.getElementById('tree');
        let header = document.querySelector('header');

        window.addEventListener('scroll', function(){
            let value = window.scrollY;
            hills.style.top = value * 0.5 + 'px';
            tree.style.top = value * 0 + 'px';
            text.style.marginRight = value * 4 + 'px';
            text.style.marginTop = value * 1.5 + 'px';
            btn.style.marginTop = value * 1.5 + 'px';
            header.style.top = value * 0.5 + 'px';
        })