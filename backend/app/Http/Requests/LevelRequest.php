<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class LevelRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {

        $rules = [
            "name" => "required|min:3|max:255"
        ];

        if ($this->method() === "PATCH" || $this->method() === "PUT") {
            $rules = [
                "name" => 'nullable|min:3|max:255'
            ];
        }

        return $rules;
    }

    public function messages(): array
    {
        $messages = [
            "name.required" => "Esse campo é obrigatório",
            "name.min" => "Esse campo deve conter no mínimo :min caracteres",
            "name.max" => "Esse campo deve conter no máximo :max caracteres",
        ];

        return $messages;
    }
}
