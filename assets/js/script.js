// alert('gg')

// script to enable dark mode
    // On page load or when changing themes, best to add inline in `head` to avoid FOUC
    // if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    //     document.documentElement.classList.add('dark');
    // } else {
    //     document.documentElement.classList.remove('dark')
    // }


    // var themeToggleBtn = document.getElementById('theme-toggle');

    // themeToggleBtn.addEventListener('click', function() {

    //     // toggle icons inside button
    //     themeToggleDarkIcon.classList.toggle('hidden');
    //     themeToggleLightIcon.classList.toggle('hidden');

    //     // if set via local storage previously
    //     if (localStorage.getItem('color-theme')) {
    //         if (localStorage.getItem('color-theme') === 'light') {
    //             document.documentElement.classList.add('dark');
    //             localStorage.setItem('color-theme', 'dark');
    //         } else {
    //             document.documentElement.classList.remove('dark');
    //             localStorage.setItem('color-theme', 'light');
    //         }

    //     // if NOT set via local storage previously
    //     } else {
    //         if (document.documentElement.classList.contains('dark')) {
    //             document.documentElement.classList.remove('dark');
    //             localStorage.setItem('color-theme', 'light');
    //         } else {
    //             document.documentElement.classList.add('dark');
    //             localStorage.setItem('color-theme', 'dark');
    //         }
    //     }
        
    // });


    // custom class
    // ar lorem

    function loremar(num){
        j=0;
        for(i=0;i<num;i++){
          if(j==50){document.writeln('<br>');j=0; }
          else{document.write('مرحبا'+' ');j++;}
          
        }
      }

    if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark');
    } else {
        document.documentElement.classList.remove('dark')
    }


    var themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon');
    var themeToggleLightIcon = document.getElementById('theme-toggle-light-icon');

    // Change the icons inside the button based on previous settings
    if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        themeToggleLightIcon.classList.remove('hidden');
    } else {
        themeToggleDarkIcon.classList.remove('hidden');
    }

    var themeToggleBtn = document.getElementById('theme-toggle');

    themeToggleBtn.addEventListener('click', function() {

        // toggle icons inside button
        themeToggleDarkIcon.classList.toggle('hidden');
        themeToggleLightIcon.classList.toggle('hidden');

        // if set via local storage previously
        if (localStorage.getItem('color-theme')) {
            if (localStorage.getItem('color-theme') === 'light') {
                document.documentElement.classList.add('dark');
                localStorage.setItem('color-theme', 'dark');
            } else {
                document.documentElement.classList.remove('dark');
                localStorage.setItem('color-theme', 'light');
            }

        // if NOT set via local storage previously
        } else {
            if (document.documentElement.classList.contains('dark')) {
                document.documentElement.classList.remove('dark');
                localStorage.setItem('color-theme', 'light');
            } else {
                document.documentElement.classList.add('dark');
                localStorage.setItem('color-theme', 'dark');
            }
        }
        
    });


    // animation scroll reveal
    ScrollReveal().reveal('.hero',{
        delay:'200',
        duration:'600',
        distance:'50px',
        origin:'top',
        easing:'ease-in-out',
    });
    ScrollReveal().reveal('.features',{
        delay:'200',
        duration:'900',
        distance:'200px',
        origin:'bottom',
        easing:'ease-in-out',
    });
    ScrollReveal().reveal('.categories',{
        delay:'200',
        duration:'900',
        distance:'200px',
        origin:'bottom',
        easing:'ease-in-out',
    });
    ScrollReveal().reveal('.aboutUs',{
        delay:'200',
        duration:'900',
        distance:'200px',
        origin:'bottom',
        easing:'ease-in-out',
    });
    ScrollReveal().reveal('.all-courses',{
        delay:'200',
        duration:'900',
        distance:'200px',
        origin:'bottom',
        easing:'ease-in-out',
    });
    ScrollReveal().reveal('.FAQ',{
        delay:'500',
        duration:'900',
        distance:'200px',
        origin:'bottom',
        easing:'ease-in-out',
    });
    ScrollReveal().reveal('.all-courses',{
        delay:'200',
        duration:'900',
        distance:'200px',
        origin:'bottom',
        easing:'ease-in-out',
    });
    ScrollReveal().reveal('.news-letter',{
        delay:'200',
        duration:'900',
        distance:'200px',
        origin:'bottom',
        easing:'ease-in-out',
    });
    ScrollReveal().reveal('.blogs',{
        delay:'200',
        duration:'900',
        distance:'200px',
        origin:'bottom',
        easing:'ease-in-out',
    });
    

    // animation scroll reveal

    