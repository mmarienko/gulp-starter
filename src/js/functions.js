function togglePopup(id) {
   const popup = document.getElementById(id);

   if (popup) {
         popup.classList.toggle("active");
   } else {
         console.error(`The popup window by id '${id}' not found!`);
   }
};

function toggleModal(id) {
   const modal = document.getElementById(id);

   if (modal) {
         modal.classList.toggle("active");

         document.body.style.overflow = (document.body.style.overflow == 'hidden') ? 'visible' : 'hidden';
   } else {
         console.error(`The modal window by id '${id}' not found!`);
   }
};

function tabChange(_this, target) {
   const trigger = _this.parentNode.dataset.trigger;
   const content = _this.parentNode.dataset.content;

   document.querySelectorAll(trigger).forEach(function (item) {
         item.classList.remove('active');
   });

   document.querySelectorAll(content).forEach(function (item) {
         item.classList.remove('active');
   });

   _this.classList.add('active');
   document.getElementById(target).classList.add('active');
};