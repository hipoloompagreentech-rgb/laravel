<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" @class(['dark' => ($appearance ?? 'system') == 'dark'])>
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title inertia>'HipooLoompa Green Tech'</title>

        <link rel="icon" href="/images/LogoHipo.jpg" type="image/jpg" sizes="32x32">
        <link rel="icon" href="/images/LogoHipo.jpg" type="image/jpg" sizes="16x16">
        <link rel="apple-touch-icon" href="/images/LogoHipo.jpg">

        <link rel="preconnect" href="https://fonts.bunny.net">
        <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />

        @viteReactRefresh
        @vite(['resources/js/app.tsx', "resources/js/pages/{$page['component']}.tsx"])
        @inertiaHead
    </head>
    <body class="font-sans antialiased">
        @inertia
    </body>
</html>
