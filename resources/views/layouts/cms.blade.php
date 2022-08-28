<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Eshop</title>


    <link rel="stylesheet" href="{{url('public/css/cms.css')}}">

</head>

<body>
<div class="container-fluid">

    @yield('nav')

    @yield('content')
</div>

<script src="{{url('public/js/cms.js')}}"></script>
</body>
</html>
