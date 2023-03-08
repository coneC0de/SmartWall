<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Odeljenje;


class OdeljenjeController extends Controller
{
    //

    function AddOdeljenje(Request $req)
    {
        $odeljenje = new Odeljenje;
        $odeljenje->id_kabineta=$req->id_kabineta;
        $odeljenje->naziv_predmeta=$req->naziv_predmeta;
        $odeljenje->sprat=$req->sprat;
        $odeljenje->br_racunara=$req->br_racunara;
        $odeljenje->save();
    }

}
