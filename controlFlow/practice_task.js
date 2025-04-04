let userRole ;
if(userRole ==="Employee"){
    console.log("Access to dietary services");
}else if (userRole === "Enrolled member"){
    console.log("Access to dietary services and one-on-one interaction with a dietician");
}else if (userRole === "Subscriber"){
    console.log("Dietary Services only")
}else{
    console.log("Need to enroll first,then proceed")
}

