<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\LevelRequest;
use App\Http\Resources\LevelResource;
use App\Models\Level;
use Illuminate\Http\Response;

class LevelController extends Controller
{
    public function index()
    {
        $levels = Level::paginate(10);
        foreach ($levels as $level) {
            $level['developers_amount'] = $level->developers->count();
        }

        return LevelResource::collection($levels);
    }

    public function store(LevelRequest $request)
    {
        $data = $request->validated();
        $level = Level::create($data);

        return new LevelResource($level);
    }

    public function update(LevelRequest $request, string $id)
    {
        $level = Level::findOrFail($id);
        $data = $request->validated();
        $level->update($data);

        return new LevelResource($level);
    }


    public function destroy(string $id)
    {
        $level = Level::findOrFail($id);
        if (count($level->developers) > 0) {
            return  response()->json([
                "error" => "Existem desenvolvedores associados à este nível"
            ], Response::HTTP_NOT_IMPLEMENTED);
        }

        $level->delete();

        return  response()->json([], Response::HTTP_NO_CONTENT);
    }

    public function show(string $id)
    {
        $level = Level::findOrFail($id);
        $level['developers_amount'] = $level->developers->count();

        return new LevelResource($level);
    }

}
