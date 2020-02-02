<?php

    // $request = new HttpRequest('https://api.websitecarbon.com/b?url=', HttpRequest::METH_POST);

    
    // try {
    //     echo $r->send()->getBody();
    // } catch (HttpException $ex) {
    //     echo $ex;
    // }


    echo $_POST["query"];

    header("Location:index.html");
?>