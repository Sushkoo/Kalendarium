document.addEventListener("DOMContentLoaded", function(){
    const calendarDays = document.querySelectorAll('.calendar-day');
    const startDate = 1;
    const endDate = 24;
    d = newDate();
    num = d.getDate();

    calendarDays.forEach((day,index)=>{
        day.addEventListener('click',()=>openDoor(day, index+1));
    });

    function openDoor(day, dayNumber){
        if(dayNumber>= startDate && dayNumber<=endDate){
            day.classList.add('opened');
            alert('You opened door ${dayNumber}!');

        } else{
            alert('Door ${dayNumber} is not avaible yet.');
        }
    }
});