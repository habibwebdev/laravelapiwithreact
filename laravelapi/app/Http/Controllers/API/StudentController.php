<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Student;
use Illuminate\Http\Request;

class StudentController extends Controller
{
    public function store(Request $request) {
        $student = new Student;
        $student->name = $request->input('name');
        $student->name = $request->input('course');
        $student->name = $request->input('email');
        $student->name = $request->input('phone');
        $student->save();

        return response()->json([
            'status' => 200,
            'message' => 'Student Added Successfully'
        ]);
    }
}
