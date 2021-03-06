
const sections = document.querySelectorAll('section')

document.addEventListener('scroll', () => {
  sections.forEach(section => {
    if(section.getBoundingClientRect().top <= document.body.scrollTop) {
      document.body.style.background = section.dataset.color
    }    
  })
})


const header = document.querySelector('header')
const projectsSection = document.querySelector('.projects')

const projectsOptions = {
  threshold: 0,
  rootMargin: '-200px 0px'
}

const projectsSectionObserver = new IntersectionObserver(function(entries, projectsSectionObserver) {
  entries.forEach(entry => {
    if(entry.isIntersecting) {
      header.classList.add('header-dark')
    } else {
      header.classList.remove('header-dark')
    }
  })
}, projectsOptions)

projectsSectionObserver.observe(projectsSection)