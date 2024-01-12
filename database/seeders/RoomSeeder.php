<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Room;

class RoomSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
       Room::create([
        'room_name' =>  "tamu",
        'long'      =>  "8",
        'wide'      =>  "8"
       ]);
    }
}
