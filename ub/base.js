<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>EPIX Portal</title>
    <style>
        body {
            font-family: sans-serif;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            height: 100vh;
            background-color: #f0f0f0;
        }
        .container {
            text-align: center;
            background: white;
            padding: 2rem;
            border-radius: 12px;
            box-shadow: 0 4px 6px rgba(0,0,0,0.1);
        }
        button {
            display: block;
            width: 250px;
            margin: 10px auto;
            padding: 12px;
            font-size: 16px;
            cursor: pointer;
            border: none;
            border-radius: 8px;
            background-color: #007bff;
            color: white;
            transition: background 0.3s;
        }
        button:hover {
            background-color: #0056b3;
        }
        .admin-note {
            margin-top: 20px;
            font-size: 0.9rem;
            color: #555;
            font-style: italic;
        }
        .hidden {
            margin-top: 0px;
            font-size: 0.9rem;
            color: white;
            font-style: italic;
        }
    </style>
</head>
<body>

<div class="container">
    <h1>Welcome to EPIX</h1>
    
    <button onclick="window.open('epix.svg', '_blank', 'width=800,height=600')">
        EPIX at Home
    </button>
    <p>Unblock</p>
<button onclick="window.open('duck.svg', '_blank', 'width=800,height=600')">
        Duckmath
    </button>
    <p>unblock</p>
<hr>
    <button onclick="window.open('epixathome.html', '_blank', 'width=800,height=600')">
        placeholder
    </button>
    <p>placeholder.</p>

    <p class="admin-note">Gatekeep</p>
        <p class="hidden">main.html</p>
<p class="admin-note">Gatekeep</p>
</div>

</body>
</html>
