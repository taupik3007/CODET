<table border="1">
    <tr>
        <th>nama ruangan</th>
        <th>panjang</th>
        <th>luas</th>
    </tr>
    @foreach ($data as $room)        
    <tr>
        <td>{{$room->room_name}}</td>
        <td>{{$room->long}}</td>
        <td>{{$room->wide}}</td>
    </tr>
    @endforeach

</table>