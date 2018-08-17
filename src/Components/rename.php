<?php
 
/**
 * Script to copy over and rename files from another directory (Example by default).
 * TODO:
 * - Provide help flag (option -h or -help)
 * - Check special characters
 */
 
// Search and replace parameters
$search = 'Example';
$replace = "";
if ($argv[1]) {
  $replace = escapeshellcmd($argv[1]);
  if ($argv[2]) {
    $search = escapeshellcmd($argv[2]);
  }
}
else {
  echo "Provide search and replace parameters. For example 'php rename.php new-name old-name";
  exit;
}

// Do not re
if ($argv[1] == '.' || $argv[1] == './') {
  exit;
} 

// Copy over files.
system("cp -rf $search $replace");

// Path to current directory
$path = dirname(__FILE__) . '/' . $replace;
 
// Iterator object
$dir = new DirectoryIterator($path);
 
foreach ($dir as $file) {
  // Reset success flag
  $success = false;
 
  // Do not rename dot-leading files and the script itself
  if (!$file->isDot() && ($file->getFilename() != "rename.php")) {
    // Get new name
    $new_name = str_replace($search, $replace, $file->getFilename());
 
    // Check if match is found
    if ($new_name != "" && $new_name !== $file->getFilename()) {
 
      // On success, set flag to true
      $success = copy("{$path}/{$file->getFilename()}", "{$path}/{$new_name}");
 
      if ($success) {
        echo "Renamed {$file->getFilename()} to $new_name\n";
        unlink("{$path}/{$file->getFilename()}");

        // Search and Replace in file
        $file_contents = file_get_contents("{$path}/{$new_name}");
        $file_contents = str_replace($search, $replace, $file_contents);
        file_put_contents("{$path}/{$new_name}", $file_contents);
      }
 
    } // End match check
 
  } // End name check
 
} // End loop
 
?>