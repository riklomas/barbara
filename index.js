import barba from '@barba/core'; // Or nothing if loaded via the browser

const speed = 500

barba.init({
  transitions: [
    {
      sync: true,
      leave() {
        return new Promise(resolve => {
          setTimeout(() => resolve(), speed)
        })
      },
      enter({ next }) {
        const newContainer = next.container

        newContainer.style.position = "fixed"
        newContainer.style.top = 0
        newContainer.style.left = 0
        newContainer.style.transform = `translate(100%, 0)`
        newContainer.style.zIndex = 1

        // tweenmax uses seconds!! WHY?
        TweenMax.to(newContainer, speed / 1000, {
          transform: "translate(0, 0)",
          onComplete: () => {
            newContainer.style.zIndex = 0
            this.async()
          } 
        });
      }
    },
  ],
});