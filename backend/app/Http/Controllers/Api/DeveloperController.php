<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\DeveloperRequest;
use App\Http\Resources\DeveloperResource;
use App\Models\Developer;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class DeveloperController extends Controller
{
    public function index(Request $request)
    {
        $developers = Developer::name($request->name)
        ->levelId($request->level_id)
        ->gender($request->gender)
        ->age($request->age)
        ->paginate(10);
        foreach ($developers as $developer) {
            $developer["level"] = $developer->level->name;
        }

        return DeveloperResource::collection($developers);
    }

    public function store(DeveloperRequest $request)
    {
        $data = $request->validated();
        $developer = Developer::create($data);

        return new DeveloperResource($developer);
    }

    public function update(DeveloperRequest $request, string $id)
    {
        $developer = Developer::findOrFail($id);
        $data = $request->validated();
        $developer->update($data);

        return new DeveloperResource($developer);
    }

    public function destroy(string $id)
    {
        $developer = Developer::findOrFail($id);
        $developer->delete();

        return  response()->json([], Response::HTTP_NO_CONTENT);
    }

    public function show(string $id)
    {
        $developer = Developer::findOrFail($id);

        return new DeveloperResource($developer);
    }
}
